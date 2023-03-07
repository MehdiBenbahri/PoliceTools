import TextField from "@mui/material/TextField";
import TelInput from "./TelInput";
import DatePicker from "./DatePicker";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import facts from "../Data/FactsV2";
import Checkbox from "@mui/material/Checkbox";
import FactsList from "./FactsList";
import Total from "./Total";
import moment from "moment";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button"
import {React, useState, useEffect} from "react";
import Modal from "@mui/material/Modal";

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
    const [date5IsError] = useState(false);

    const [isWaitingForJuge, setIsWaitingForJuge] = useState(true);

    function handleEditedFact(e) {
        setSelectedFacts(e);
        setTotalPrice(selectedFacts.reduce(function (acc, obj) {
            return acc + (obj.price * obj.quantity);
        }, 0));
        setTotalTime(selectedFacts.reduce(function (acc, obj) {
            return acc + (obj.time * obj.quantity);
        }, 0));
        //sendData();
    }

    const [nbNotPayed, setNbNotPayed] = useState(0);
    function handleEditedFactStatus(e) {
        setSelectedFacts(e);
        setNbNotPayed(selectedFacts.filter(el => el.is_not_payed).length);
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


        //sendData();
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

    const [seizureIsError, setSeizureIsError] = useState(false);
    const [seizureIsErrorMessage, setSeizureIsErrorMessage] = useState('');
    useEffect(function() {
        if (selectedFacts.filter(el => el.concernWeapon === true).length > 0 && seizureList.length <= 2){
            setSeizureIsError(true);
            setSeizureIsErrorMessage("️️Attention : vous avez sélectionné des faits reprochés qui concernent des armes, vérifier bien que vous avez saisi toutes les armes sur cet individu ! Si ce dernier n'avait pas d'arme sur lui (en cas de complicité), ajouter 'Aucune arme saisi sur l'individu'.")
        }
        else{
            setSeizureIsError(false);
            setSeizureIsErrorMessage('');
        }
    },[selectedFacts,seizureList])


    function getPhone(event) {
        setPhone(event.target.value);
        //sendData();
    }

    const changeFacts = (event) => {
        setSelectedFacts([]);
        setSelectedFactsString([]);
        setTotalTime(0);
        setTotalPrice(0);

        //sendData();
    }

    const [open, setOpen] = useState(false);

    function handleOpen(e) {
        setOpen(true);
    }

    const [readedRights, setReadedRights] = useState(false);
    function handleReadedRights(event){
        setReadedRights(event.target.checked);
    }

    const handleClose = () => setOpen(false);
    const [result, setResult] = useState('');
    const [selectedLawMan, setSelectedLawMan] = useState('');
    const [result2, setResult2] = useState('');

    useEffect(() => {
        let res = readedRights ? 'Le suspect à bien entendu et compris tous ses droits \n' : '';
        res += "Matricules présents : [" + agentsRegistration + "] \n";
        res += "Nom et Prénom du ou des suspect : [" + lastName + " " + firstName + "] \n";
        res += "Numéro de téléphone : [" + phone + "] \n";
        res += "Date et heure des productions des faits : [" + moment(date1).format("DD/MM/YYYY") + "][" + moment(date1).format("HH:mm") + "] \n";
        res += "Date et heure de mise en état d'arrestation : [" + moment(date2).format("DD/MM/YYYY") + "][" + moment(date2).format("HH:mm") + "] \n";
        res += "Lieu de production des faits : [" + placeProduction + "] \n \n";
        res += "Date et heure de lecture des droits Miranda : [" + moment(date3).format("DD/MM/YYYY") + "][" + moment(date3).format("HH:mm") + "] \n";
        res += "Date et heure de mise en G.A.V : [" + moment(date4).format("DD/MM/YYYY") + "][" + moment(date4).format("HH:mm") + "] \n";
        res += "Date et heure de sortie de G.A.V : [" + moment(date5).format("DD/MM/YYYY") + "] [" + (isWaitingForJuge ? 'EN ATTENTE DE JUGEMENT' : moment(date5).format("HH:mm")) + "] \n \n";
        res += "Faits constatés : \n" + factsDescription + " \n \n";
        res += "Faits reprochés : \n " + (selectedFacts.map(el => {
            //let str = "\n -" + el.name + " " + ("x" + el.quantity) + " " + (el.is_not_payed ? '(Amende impayée)' : '');
            let str = `\n -${el.name} x${el.quantity} ${el.is_not_payed ? '(Amende impayée)' : ''}`;
            return str
        }).join(" ")) + " \n \n";
        res += "Total des amendes : " + totalPrice + "$ \n";
        res += "Total de garde à vue (minutes) : " + totalTime + " min \n \n";
        res += "Saisie : " + seizureList + " \n";
        res += "Lien Siprnet : " + siprnetLink + " \n";
        res += "Fin du rapport | " + authorRegistration;
        setResult(res);

        let res2 = ("Bonjour Mesdames/Messieurs les @{{LAW_MEN}}, nous avons besoin de vos services pour : " + lastName + " " + firstName + "\n \n").replace("{{LAW_MEN}}", selectedLawMan);
        res2 += "Lien Siprnet : " + siprnetLink + " \n";
        res2 += "Cordialement | " + authorRegistration;
        setResult2(res2);

    }, [readedRights,nbNotPayed,result, result2, selectedLawMan, agentsRegistration, authorRegistration, lastName, firstName, phone, date1, date2, date3, date4, date5, placeProduction, isWaitingForJuge, factsDescription, totalPrice, totalTime, seizureList, siprnetLink, selectedFacts]);

    return (
        <div>
            <div className={"bg-yellow-paper my-3 p-2"}>
                <h6 className="text-dark-paper mb-0 mt-2">0. Avant tout</h6>
                <div className={"d-flex justify-content-start align-items-center"}>
                    <label htmlFor="readedRights" className={(readedRights ? 'text-success fw-bolder' : 'text-danger fw-bolder')}>Le suspect à bien entendu et compris tous ses droits ? (Obligatoire avant mise en GAV)</label>
                    <Checkbox color={"default"} name={"readedRights"} checked={readedRights} onChange={(event) => handleReadedRights(event)} />
                </div>
                <hr/>
                <div className={"row my-2"}>
                    <h6 className="text-dark-paper mb-0">1. Informations sur le suspect</h6>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="firstname" className={"rounded text-light"} color={"warning"}
                                   label="Prénom"
                                   value={firstName}
                                   onChange={(e) => {
                                       setFirstName(e.target.value);
                                       //sendData();
                                   }}
                                   placeholder={"Licro"}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="lastname" className={"rounded text-light"} color={"warning"}
                                   label="Nom de famille"
                                   value={lastName}
                                   onChange={(e) => {
                                       setLastName(e.target.value);
                                       //sendData();
                                   }}
                                   placeholder={"Robert"}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-4 mt-3 px-4"}>
                        <TelInput onChange={getPhone}/>
                    </div>
                </div>
                <div className={"row my-2"}>
                    <h6 className="text-dark-paper mb-0 mt-2">2. Horodatage de l'affaire</h6>
                    <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                        <DatePicker label={"Date/Heure de production des faits"}
                                    sx={{borderColor:"#a28a59!important"}}
                                    onChange={(e) => {
                                        setDate1(e.target.value);
                                        setDate1IsError(new Date(date1).getTime() >= new Date(date2).getTime());
                                        //sendData();
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
                                        //sendData();
                                    }} value={date2}/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                        <DatePicker label={"Date/Heure de lecture des droits Miranda"}
                                    min={date2}
                                    isError={new Date(date3).getTime() >= new Date(date4).getTime()}
                                    onChange={(e) => {
                                        setDate3(e.target.value);
                                        setDate3IsError(new Date(date3).getTime() >= new Date(date4).getTime());
                                        //sendData();
                                    }}
                                    value={date3}/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-6 mt-3 px-4"}>
                        <DatePicker label={"Date/Heure de mise en G.A.V"}
                                    min={date3}
                                    className={"date-picker"}
                                    isError={!isWaitingForJuge ? new Date(date4).getTime() >= new Date(date5).getTime() : false}
                                    onChange={(e) => {
                                        setDate4(e.target.value);
                                        setDate4IsError(new Date(date4).getTime() >= new Date(date5).getTime());
                                        //sendData();
                                    }}
                                    value={date4}/>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <div className={"d-flex flex-column justify-content-between align-content-center"}>
                            <div className={"d-flex justify-content-start align-content-center text-dark-paper"}>
                                <span className={"mt-2"}>L'individu est en attente de jugement ?</span>
                                <Checkbox checked={isWaitingForJuge}
                                          onChange={() => {
                                              setIsWaitingForJuge(!isWaitingForJuge);
                                              //sendData();
                                          }}
                                          color={"default"}
                                          name={"isWaitingJuge"}
                                />
                            </div>
                            <div className={"d-flex flex-column justify-content-between align-content-center"}>
                                <label style={{fontSize: "0.75rem"}} htmlFor="date-production" className={"text-dark-paper"}>Date/Heure
                                    de sortie de G.A.V</label>
                                <input name={"date-production"}
                                       defaultValue={moment(date5).format("YYYY-MM-DD").toString()}
                                       style={{fontSize: "0.85rem"}}
                                       onChange={(e) => {
                                           setDate5(e.target.value);
                                           //sendData();
                                       }}
                                       className={"date-picker"}
                                       type={!isWaitingForJuge ? "datetime-local" : "date"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row my-2"}>
                    <h6 className="text-dark-paper mb-0 mt-2">3. Informations sur les faits</h6>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <TextField fullWidth id="where" className={"rounded text-light"} color={"warning"}
                                   label="Lieu(x) de production des faits"
                                   value={placeProduction}
                                   onChange={(e) => {
                                       setPlaceProduction(e.target.value);
                                       //sendData();
                                   }}
                                   placeholder={"Derrière le garage de Paleto Bay, entre le point d'opium et la plage."}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <TextField rows={12} fullWidth multiline id="fact" className={"rounded text-light"}
                                   color={"warning"}
                                   value={factsDescription}
                                   onChange={(e) => {
                                       setFactsDescription(e.target.value);
                                       //sendData();
                                   }}
                                   label="Faits constatés"
                                   placeholder={"Racontez les faits avec le plus de détails possible (surtout ceux qui sont en rapport avec les faits reprochés)."}
                                   variant="outlined"
                        />
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <TextField fullWidth id="object" className={"rounded text-light"}
                                   color={"warning"}
                                   label="Saisies"
                                   error={seizureIsError}
                                   helperText={seizureIsErrorMessage}
                                   value={seizureList}
                                   onChange={(e) => {
                                       setSeizureList(e.target.value);
                                       //sendData();
                                   }}
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
                                    <TextField {...params} label="Sélectionnez les faits reprochés"
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
                        <FactsList onChangeFactsNum={handleEditedFact} onChangeFactsStatus={handleEditedFactStatus} list={selectedFacts}/>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                        <Total totalTime={totalTime} dateGav={date4} totalPrice={totalPrice}/>
                    </div>
                </div>
                <div className={"row my-2"}>
                    <h6 className="text-dark-paper mb-0 mt-2">4. Informations du dossier</h6>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="agents" className={"rounded text-light"} color={"warning"}
                                   label="Matricules des agents présents"
                                   value={agentsRegistration}
                                   onChange={(e) => {
                                       setAgentsRegistration(e.target.value);
                                       //sendData();
                                   }}
                                   placeholder={"45-BCSO;32-MR;47-BCSO"}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="author" className={"rounded text-light"} color={"warning"}
                                   label="Matricule de l'auteur"
                                   value={authorRegistration}
                                   onChange={(e) => {
                                       setAuthorRegistration(e.target.value);
                                       //sendData();
                                   }}
                                   placeholder={"42-BCSO"}
                                   variant="outlined"/>
                    </div>
                    <div className={"col-sm-12 col-md-6 col-lg-4 mt-3 px-4"}>
                        <TextField fullWidth id="author" className={"rounded text-light"} color={"warning"}
                                   label="Lien SIPRNET"
                                   value={siprnetLink}
                                   onChange={(e) => {
                                       setSiprnetLink(e.target.value);
                                       //sendData();
                                   }}
                                   placeholder={"https://siprnet.pryoxis.net/case/?character_id=..."}
                                   variant="outlined"/>
                    </div>
                </div>
            </div>
            <div className={"d-flex fw-bold justify-content-center align-items-center " + (readedRights ? 'd-none' : '')}>
                N'oublie pas de lire les droits du suspect et de cocher la petite case en haut !
                <img width={"55rem"} src="https://image.noelshack.com/fichiers/2019/25/6/1561196427-bebel-en-peau-de-genou.png" alt="genou pistolet"/>
            </div>
            <div className={"d-flex justify-content-center align-items-center my-3"}>

                {(date1IsError || date2IsError || date3IsError || date4IsError || date5IsError) ?
                    <Button onClick={handleOpen} variant="contained" color={"error"}>
                        Attention à la cohérence de vos dates <Icon>warningAmber</Icon>
                    </Button> : <Button onClick={handleOpen} variant="contained" color={"warning"}>
                        Générer le rapport <Icon>cached</Icon>
                    </Button>}

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div
                    className={"d-flex justify-content-center align-items-center animate__animated animate__fadeInUp"}>
                    <div className={"bg-dark my-3 p-2 col-sm-11 col-md-10 col-lg-8 text-light"}>
                        <div className={"d-flex justify-content-between align-items-center"}>
                            <h5 className={"user-select-none"}>Génération du rapport du rapport d'intervention</h5>
                            <div>
                                <Button className={"text-light border border-light"}
                                        onClick={() => navigator.clipboard.writeText(result)}>
                                    Copier 📋
                                </Button>
                                <Button color={"warning"} onClick={() => handleClose()}>
                                    <Icon>close</Icon>
                                </Button>
                            </div>
                        </div>
                        <div className={"my-3 user-select-none"}>
                            <div className={"text-light opacity-75"}>Attention, vérifiez bien s'il y a aucun oublie,
                                vous
                                pouvez copier-coller et/ou modifier votre rapport ici même (mais ce ne sera pas
                                sauvegardé si vous fermez cette modal).
                            </div>
                            <div className={"text-light opacity-75"}>N'oubliez pas de mettre la petite image de la carte
                                d'identité à la fin, ainsi que la petite pastille sur Discord.
                            </div>
                            <div className={"text-light opacity-75"}>Les magistrats demandent à ce que les informations
                                qui figurent ici soient mises à jour sur Siprnet (numéro du suspect, emploi, etc...).
                            </div>
                        </div>
                        <textarea className={"w-100 bg-yellow-paper"} defaultValue={result} name="result" id="result"
                                  cols="30"
                                  rows="15">
                        </textarea>
                        <h5 className={"user-select-none"}>{selectedLawMan !== "" ? 'Génération des demandes de ' + selectedLawMan : 'Pour les demandes, selectionnez le type de demande'}</h5>
                        <div className={"d-flex justify-content-between align-items-center"}>
                            <div className={"d-flex justify-content-center align-items-center"}>
                                <Button color={"error"}
                                        className={(selectedLawMan === "Juge" ? 'border border-2 ' : '')}
                                        variant={"contained"} onClick={() => {
                                    setSelectedLawMan("Juge");
                                }}>
                                    Juge ‍⚖️
                                </Button>
                                <Button
                                    className={"mx-3 " + (selectedLawMan === "Procureur" ? 'border border-2 ' : '')}
                                    color={"secondary"} variant={"contained"}
                                    onClick={() => setSelectedLawMan("Procureur")}>
                                    Procureur 📚
                                </Button>
                                <Button color={"info"}
                                        className={(selectedLawMan === "Avocat" ? 'border border-2 ' : '')}
                                        variant={"contained"} onClick={() => setSelectedLawMan("Avocat")}>
                                    Avocat 💼
                                </Button>
                            </div>
                            <div className={"d-flex justify-content-end align-items-center"}>
                                <Button className={"text-light border border-light"} onClick={() => navigator.clipboard.writeText(result2)}>
                                    Copier 📋
                                </Button>
                            </div>
                        </div>
                        <hr/>
                        {selectedLawMan !== '' ? (
                            <textarea className={"w-100 bg-yellow-paper"} onChange={(e) => setResult2(e.target.value)} value={result2} name="result2" id="result2"
                                      cols="30" rows="5"></textarea>) : ''}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Formulaire;