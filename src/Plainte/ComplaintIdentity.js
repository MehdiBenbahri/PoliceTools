import {Box, Typography} from "@mui/material";
import {useState} from "react";
import TextField from "@mui/material/TextField";

function ComplaintIdentity({designation}) {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [socialSecurity, setSocialSecurityNumber] = useState('');
    const [tel, setTel] = useState('');
    const [nickname, setNickname] = useState('');
    const [profession, setProfession] = useState('');
    return (
        <Box>
            <Box className={"d-flex justify-content-between align-content-center mt-3"}>
                <TextField value={firstname}
                           color={"warning"}
                           size={"small"}
                           className={"col-sm-12 col-md-6 me-1"}
                           label={`Prénom du ${designation}`}
                           placeholder={"Raph"}
                           onChange={(e) => setFirstName(e.target.value)}>
                </TextField>
                <TextField value={lastname}
                           color={"warning"}
                           size={"small"}
                           className={"col-sm-12 col-md-6 me-1"}
                           label={`Nom du ${designation}`}
                           placeholder={"Escobardo"}
                           onChange={(e) => setLastName(e.target.value)}>
                </TextField>
            </Box>
            <Box className={"d-flex justify-content-between align-content-center my-2"}>
                <TextField value={socialSecurity}
                           color={"warning"}
                           size={"small"}
                           type={"number"}
                           className={"col-sm-12 col-md-6 me-1"}
                           label={`Numéro de sécurité social du ${designation}`}
                           placeholder={"0102030405"}
                           onChange={(e) => setSocialSecurityNumber(e.target.value)}>
                </TextField>
                <TextField value={tel}
                           size={"small"}
                           color={"warning"}
                           className={"col-sm-12 col-md-6 me-1"}
                           label={`Numéro de téléphone du ${designation}`}
                           placeholder={"100-250"}
                           onChange={(e) => setTel(e.target.value)}>
                </TextField>
            </Box>
            <Box className={"d-flex justify-content-between align-content-center my-2"}>
                <TextField value={nickname}
                           size={"small"}
                           color={"warning"}
                           className={"col-sm-12 col-md-6 me-1"}
                           label={`Surnom du ${designation}`}
                           placeholder={"Anissa"}
                           onChange={(e) => setNickname(e.target.value)}>
                </TextField>
                <TextField value={profession}
                           size={"small"}
                           color={"warning"}
                           className={"col-sm-12 col-md-6 me-1"}
                           label={`Profession du ${designation}`}
                           placeholder={"Spécialiste de l'importation"}
                           onChange={(e) => setProfession(e.target.value)}>
                </TextField>
            </Box>
        </Box>
    )
}

export default ComplaintIdentity;