import React from "react";

function Timer(props) {
    return (
        <TimerClass className={props.className} message={props.message} start={props.start}  />
    )
}

export default Timer

class TimerClass extends React.Component{

    constructor (props){
        super(props);
        this.state = {date : new Date(),start: props.start, message : "", className : props.className,classWhenFinished : props.classWhenFinished}

        if (props.message){
            this.state.message = props.message;
        }
    }

    componentDidMount() {
        this.timer = window.setInterval(this.update.bind(this),1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    update(){
        this.setState({date: new Date(this.state.start - new Date().getTime()) })
    }

    timeDifference(date1,date2) {
        var difference = date1.getTime() - date2.getTime();

        var diffHeure = Math.floor(difference/1000/60/60);
        difference -= diffHeure*1000*60*60

        var diffMinute = Math.floor(difference/1000/60);
        difference -= diffMinute*1000*60

        var diffSeconde = Math.floor(difference/1000);
        if (date1.getTime() >= date2.getTime()){
            return (
                (diffHeure < 10 ? "0" + diffHeure : diffHeure) + ':' +
                (diffMinute < 10 ? "0" + diffMinute : diffMinute) + ':' +
                (diffSeconde < 10 ? "0" + diffSeconde : diffSeconde)
            );
        }
        else{
            window.clearInterval(this.timer);
            return "00:00:00"
        }

    }

    render (){
        return (
            <div className={this.state.className + this.state.classWhenFinished ? this.state.classWhenFinished : ""}>
                {this.state.message + this.timeDifference(new Date(this.state.start),new Date())}
            </div>
        )
    }

}