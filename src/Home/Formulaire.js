import TextField from "@mui/material/TextField";
import TelInput from "./TelInput";
import DatePicker from "./DatePicker";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import facts from "../Data/Facts";
import Checkbox from "@mui/material/Checkbox";
import FactsList from "./FactsList";
import Total from "./Total";
import moment from "moment";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button"
import {React, useState} from "react";

function Formulaire(props) {

    const [date1, setDate1] = useState(moment().format("YYYY-MM-DDTHH:mm").toString());
    const [date1IsError, setDate1IsError] = useState(false);
    const [date2, setDate2] = useState(moment().add(1, "minute").format("YYYY-MM-DDTHH:mm").toString());
    const [date2IsError, setDate2IsError] = useState(false);
    const [date3, setDate3] = useState(moment().add(3, "minute").format("YYYY-MM-DDTHH:mm").toString());
    const [date3IsError, setDate3IsError] = useState(false);
    const [date4, setDate4] = useState(moment().add(5, "minute").format("YYYY-MM-DDTHH:mm").toString());
    const [date4IsError, setDate4IsError] = useState(false);
    const [date5, setDate5] = useState(moment().add(7, "minute").format("YYYY-MM-DDTHH:mm").toString());
    const [date5IsError, setDate5IsError] = useState(false);

    const [isWaitingForJuge, setIsWaitingForJuge] = useState(true);

    function handleEditedFact(e) {
        setSelectedFacts(e);
        setTotalPrice(selectedFacts.reduce(function (acc, obj) {
            return acc + (obj.price * obj.quantity);
        }, 0));
        setTotalTime(selectedFacts.reduce(function (acc, obj) {
            return acc + (obj.time * obj.quantity);
        }, 0));
    }

    const [selectedFacts, setSelectedFacts] = useState([]);
    const [selectedFactsString, setSelectedFactsString] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    //retourne false si la list ne contient pas l'object donnée
    function containsObject(obj, list) {
        obj = JSON.parse(obj);
        let founded = false;
        list.forEach(el => {
            if (el.name === obj.name) {
                founded = true
            }
        });
        return founded;
    }

    const handleFactChange = (event) => {
        const {
            target: {value},
        } = event;
        if (!containsObject(value, selectedFacts)) {
            setSelectedFacts(oldArray => [...oldArray, JSON.parse(value)]);
            selectedFactsString.push(JSON.parse(value).name);
            setTotalTime(totalTime + (JSON.parse(value).time * JSON.parse(value).quantity));
            setTotalPrice(totalPrice + (JSON.parse(value).price * JSON.parse(value).quantity));
        } else {
            setSelectedFacts(selectedFacts.filter(el =>
                el.name !== JSON.parse(value).name
            ));
            setSelectedFactsString(selectedFactsString.filter(el =>
                el !== JSON.parse(value).name
            ));
            setTotalTime(totalTime - JSON.parse(value).time * JSON.parse(value).quantity);
            setTotalPrice(totalPrice - JSON.parse(value).price * JSON.parse(value).quantity);
        }
    };

    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [placeProduction, setPlaceProduction] = useState('');
    const [factsDescription, setFactsDescription] = useState('');
    const [seizureList, setSeizureList] = useState('');
    const [agentsRegistration, setAgentsRegistration] = useState('');
    const [authorRegistration, setAuthorRegistration] = useState('');
    const [siprnetLink, setSiprnetLink] = useState('');

    function getPhone(event) {
        setPhone(event.target.value);
    }

    const changeFacts = (event) => {
        setSelectedFacts([]);
        setSelectedFactsString([]);
        setTotalTime(0);
        setTotalPrice(0);
    }

    function sendData(e){
        let data = {
            firstName:firstName,
            lastName:lastName,
            date1:date1,
            date2:date2,
            date3:date3,
            date4:date4,
            date5:date5,
        }
        props.data(data);
    }

    return (
        <div>
            <div className={"bg-yellow-paper my-3 p-2"}>
                <div className={"row my-2"}>
                    <h6 className="text-muted mb-0">1. Informations sur le suspect</h6>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="firstname" className={"rounded text-light"} color={"warning"}
                                   label="Prénom"
                                   value={firstName}
                                   onChange={(e) => setFirstName(e.target.value)}
                                   placeholder={"Licro"}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="lastname" className={"rounded text-light"} color={"warning"}
                                   label="Nom de famille"
                                   value={lastName}
                                   onChange={(e) => setLastName(e.target.value)}
                                   placeholder={"Robert"}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-4 mt-3 px-4"}>
                        <TelInput onChange={getPhone}/>
                    </div>
                </div>
                <div className={"row my-2"}>
                    <h6 className="text-muted mb-0 mt-2">2. Horodatage de l'affaire</h6>
                    <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                        <DatePicker label={"Date/Heure de production des faits"}
                                    onChange={(e) => {
                                        setDate1(e.target.value);
                                        setDate1IsError(new Date(date1).getTime() >= new Date(date2).getTime());
                                    }}
                                    isError={new Date(date1).getTime() >= new Date(date2).getTime()}
                                    max={date2}
                                    value={date1}/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                        <DatePicker label={"Date/Heure de mise en état d'arrestation"}
                                    min={date1}
                                    isError={new Date(date2).getTime() >= new Date(date3).getTime()}
                                    onChange={(e) => {
                                        setDate2(e.target.value);
                                        setDate2IsError(new Date(date2).getTime() >= new Date(date3).getTime());
                                    }} value={date2}/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                        <DatePicker label={"Date/Heure de lecture des droits Miranda"}
                                    min={date2}
                                    isError={new Date(date3).getTime() >= new Date(date4).getTime()}
                                    onChange={(e) => {
                                        setDate3(e.target.value);
                                        setDate3IsError(new Date(date3).getTime() >= new Date(date4).getTime());
                                    }}
                                    value={date3}/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                        <DatePicker label={"Date/Heure de mise en G.A.V"}
                                    min={date3}
                                    isError={new Date(date4).getTime() >= new Date(date5).getTime()}
                                    onChange={(e) => {
                                        setDate4(e.target.value);
                                        setDate4IsError(new Date(date4).getTime() >= new Date(date5).getTime());
                                    }}
                                    value={date4}/>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <div className={"d-flex flex-column justify-content-between align-content-center"}>
                            <div className={"d-flex justify-content-start align-content-center text-muted"}>
                                <span className={"mt-2"}>L'individu est en attente de jugement ?</span>
                                <Checkbox checked={isWaitingForJuge}
                                          onChange={() => setIsWaitingForJuge(!isWaitingForJuge)}
                                          color={"default"}
                                          name={"isWaitingJuge"}
                                />
                            </div>
                            <div className={"d-flex flex-column justify-content-between align-content-center"}>
                                <label style={{fontSize: "0.75rem"}} htmlFor="date-production" className={"text-muted"}>Date/Heure
                                    de sortie de G.A.V</label>
                                <input name={"date-production"}
                                       value={!isWaitingForJuge ? moment().format("YYYY-MM-DDThh:mm").toString() : moment(date5).format("YYYY-MM-DD").toString()}
                                       style={{fontSize: "0.85rem"}}
                                       onChange={(e) => {
                                           setDate5(e.target.value);
                                       }}
                                       className={"form-control-lg border border-yellow-paper shadow-none bg-transparent"}
                                       type={!isWaitingForJuge ? "datetime-local" : "date"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row my-2"}>
                    <h6 className="text-muted mb-0 mt-2">3. Informations sur les faits</h6>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <TextField fullWidth id="where" className={"rounded text-light"} color={"warning"}
                                   label="Lieu(x) de production des faits"
                                   value={placeProduction}
                                   onChange={(e) => setPlaceProduction(e.target.value)}
                                   placeholder={"Derrière le garage de Paleto Bay, entre le point d'opium et la plage."}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <TextField rows={4} fullWidth multiline id="fact" className={"rounded text-light"}
                                   color={"warning"}
                                   value={factsDescription}
                                   onChange={(e) => setFactsDescription(e.target.value)}
                                   label="Faits constatés"
                                   placeholder={"Racontez les faits avec le plus de détails possible (surtout ceux qui sont en rapport avec les faits reprochés)."}
                                   variant="outlined"
                        />
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <TextField fullWidth id="object" className={"rounded text-light"}
                                   color={"warning"}
                                   label="Saisies"
                                   value={seizureList}
                                   onChange={(e) => setSeizureList(e.target.value)}
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
                                groupBy={(option) => option.group}
                                getOptionLabel={(selected) => selected.name}
                                color={"warning"}
                                isOptionEqualToValue={(el) => {
                                    return true;
                                }}
                                options={facts}
                                renderTags={
                                    (value, props) => (
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
                                                  checked={containsObject(JSON.stringify(option), selectedFacts)}/>
                                        <span>{option.name + " | " + option.price + "$"}</span>
                                    </li>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <FactsList onChange={handleEditedFact} list={selectedFacts}/>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <Total totalTime={totalTime} totalPrice={totalPrice}/>
                    </div>
                </div>
                <div className={"row my-2"}>
                    <h6 className="text-muted mb-0 mt-2">4. Informations du dossier</h6>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="agents" className={"rounded text-light"} color={"warning"}
                                   label="Matricules des agents présents"
                                   value={agentsRegistration}
                                   onChange={(e) => setAgentsRegistration(e.target.value)}
                                   placeholder={"45-BCSO;32-MR;47-BCSO"}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="author" className={"rounded text-light"} color={"warning"}
                                   label="Matricule de l'auteur"
                                   value={authorRegistration}
                                   onChange={(e) => setAuthorRegistration(e.target.value)}
                                   placeholder={"42-BCSO"}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="author" className={"rounded text-light"} color={"warning"}
                                   label="Lien SIPRNET"
                                   value={siprnetLink}
                                   onChange={(e) => setSiprnetLink(e.target.value)}
                                   placeholder={"https://siprnet.pryoxis.net/case/?character_id=..."}
                                   variant="outlined"/>
                    </div>
                </div>
            </div>
            <div className={"d-flex justify-content-center align-items-center my-3"}>
                <Button onClick={sendData} variant="contained" color={"warning"}>Générer le rapport <Icon>cached</Icon></Button>
            </div>
        </div>
    )
}

export default Formulaire;