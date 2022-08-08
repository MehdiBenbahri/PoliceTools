import "./Home.css";
import Header from "./Header";
import TextField from '@mui/material/TextField';
import {React, useState} from "react";
import DatePicker from "./DatePicker";
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';

function Home() {

    const [dateVal, setDateVal] = useState("2022-08-07T19:00");

    function handleChange(e) {
        setDateVal(e.target.value)
    }

    const [selectedFacts, setSelectedFacts] = useState([]);
    const [selectedFactsString, setSelectedFactsString] = useState([]);

    const facts = [
        {
            group: "Délit Mineur",
            name: "Entrave de la circulation",
            price: 2130,
            time: 0,
        },
        {
            group: "Délit Moyen",
            name: "Tentative ou vol de véhicule",
            price: 13300,
            time: 10,
        }
    ];

    //retourne false si la list ne contient pas l'object donnée
    function containsObject(obj, list) {
        obj = JSON.parse(obj);
        let founded = false;
        list.forEach(el => {
           if (el.name === obj.name){
               founded = true
           }
        });
        return founded;
    }

    const handleFactChange = (event) => {
        const {
            target: {value},
        } = event;
        if (!containsObject(value,selectedFacts)){
            setSelectedFacts(oldArray => [...oldArray, JSON.parse(value)]);
            selectedFactsString.push(JSON.parse(value).name);
        }
        else{
            setSelectedFacts(selectedFacts.filter(el =>
                el.name !== JSON.parse(value).name
            ));
            setSelectedFactsString(selectedFactsString.filter(el =>
                el !== JSON.parse(value).name
            ));
        }
    };

    const changeFacts = (event) => {
        setSelectedFacts([]);
        setSelectedFactsString([]);
    }


    return (
        <div>
            <div className="row mt-5">
                <div className="col-sm-1 col-md-2"></div>
                <div className="bg-dark text-white col-sm-10 col-md-8 shadow-sm">
                    <Header title={"Rapport d'intervention BCSO"} imgURI={"/img/BCSO_logo.png"}/>
                    <div className={"bg-yellow-paper my-3 p-2"}>
                        <div className={"row my-2"}>
                            <h6 className="text-muted mb-0">1. Informations sur le suspect</h6>
                            <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                                <TextField fullWidth id="firstname" className={"rounded text-light"} color={"warning"}
                                           label="Prénom"
                                           placeholder={"Licro"}
                                           variant="outlined"/>
                            </div>
                            <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                                <TextField fullWidth id="lastname" className={"rounded text-light"} color={"warning"}
                                           label="Nom de famille"
                                           placeholder={"Robert"}
                                           variant="outlined"/>
                            </div>
                            <div className={"col-sm-12 col-md-12 col-lg-4 mt-3 px-4"}>
                                <TextField fullWidth id="lastname" className={"rounded text-light"} color={"warning"}
                                           label="Téléphone"
                                           placeholder={"100-2030"}
                                           variant="outlined"/>
                            </div>
                        </div>

                        <div className={"row my-2"}>
                            <h6 className="text-muted mb-0 mt-2">2. Horodatage de l'affaire</h6>
                            <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                                <DatePicker label={"Date/Heure de production des faits"} onChange={handleChange}
                                            value={dateVal}/>
                            </div>
                            <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                                <DatePicker label={"Date/Heure de mise en état d'arrestation"}
                                            onChange={handleChange} value={dateVal}/>
                            </div>
                            <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                                <DatePicker label={"Date/Heure de lecture des droits Miranda"}
                                            onChange={handleChange} value={dateVal}/>
                            </div>
                            <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                                <DatePicker label={"Date/Heure de mise en G.A.V"} onChange={handleChange}
                                            value={dateVal}/>
                            </div>
                            <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                                <DatePicker label={"Date/Heure de sortie de G.A.V"} onChange={handleChange}
                                            value={dateVal}/>
                            </div>
                        </div>

                        <div className={"row my-2"}>
                            <h6 className="text-muted mb-0 mt-2">3. Informations sur les faits</h6>
                            <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                                <TextField fullWidth id="where" className={"rounded text-light"} color={"warning"}
                                           label="Lieu(x) de production des faits"
                                           placeholder={"Derrière le garage de Paleto Bay, entre le point d'opium et la plage."}
                                           variant="outlined"/>
                            </div>
                            <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                                <TextField rows={4} fullWidth multiline id="fact" className={"rounded text-light"}
                                           color={"warning"}
                                           label="Faits constatés"
                                           placeholder={"Racontez les faits avec le plus de détails possible (surtout ceux qui sont en rapport avec les faits reprochés)."}
                                           variant="outlined"/>
                            </div>
                            <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                                <TextField fullWidth id="object" className={"rounded text-light"}
                                           color={"warning"}
                                           label="Saisies"
                                           placeholder={"5 Berretta, 15 000$ d'argent sale ainsi qu'un couteau rose fluo..."}
                                           variant="outlined"/>
                            </div>
                            <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                                <FormControl fullWidth>
                                    <Autocomplete
                                        id="facts"
                                        multiple
                                        fullWidth
                                        value={selectedFacts}
                                        onChange={changeFacts}
                                        disableCloseOnSelect
                                        getOptionLabel={(selected) => selected.name}
                                        color={"warning"}
                                        isOptionEqualToValue={(el) => {
                                            return true;
                                        }}
                                        options={facts}
                                        renderTags={
                                            (value,props) => (
                                                <div {...props}>{
                                                    selectedFactsString.join(", ")
                                                }</div>
                                            )}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Selectionnez les faits reprochés"
                                                       color={"warning"} placeholder="Rechercher les faits reprochés"/>
                                        )}
                                        renderOption={(props, option, {selected}) => (
                                            <li key={option.name}>
                                                <Checkbox color={"warning"}
                                                          value={JSON.stringify(option)}
                                                          onChange={handleFactChange}
                                                          checked={containsObject(JSON.stringify(option),selectedFacts)}/>
                                                <span>{option.name + " | " + option.price + "$" + " | " + (option.time > 0 ? option.time + " minutes" : "Pas de G.A.V")}</span>
                                            </li>
                                        )}
                                    />
                                </FormControl>
                            </div>


                        </div>

                        {/*<div>*/}
                        {/*    <Input*/}
                        {/*        name="textmask"*/}
                        {/*        id="formatted-text-mask-input"*/}
                        {/*        inputComponent={NumberFormatCustom}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>

                    {/*<Header title={"Formulaire de rapport Mission Row"} imgURI={"/img/LSPD_logo.webp"} />*/}
                    {/*<Header title={"Formulaire de rapport Vespucci"} imgURI={"/img/MR_logo.png"} />*/}
                    {/*<Timer*/}
                    {/*    classWhenFinished={"opacity-50"}*/}
                    {/*    start={new Date().setMinutes(new Date().getMinutes() + 1)}*/}
                    {/*    message={""}*/}
                    {/*/>*/}
                </div>
                <div className="col-sm-1 col-md-2"></div>
            </div>
            <div className={"my-5"}></div>
        </div>
    );
}

export default Home;