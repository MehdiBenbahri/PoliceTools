import {Box, List, ListItem, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Checkbox from "@mui/material/Checkbox";

function ComplaintConditions({isAllChecked}){
    const [check1,setCheck1] = useState(false);
    const [check2,setCheck2] = useState(false);
    const [check3,setCheck3] = useState(false);
    const [check4,setCheck4] = useState(false);

    useEffect(() => {
        isAllChecked(check1 && check2 && check3 && check4);
    },[check1,check2,check3,check4,isAllChecked])

    return (
        <Box>
            <Typography className={"text-dark-paper bg-bold"}>
                0. Avant de continuer
            </Typography>
            <List>
                <ListItem className={"d-flex justify-content-between align-items-center"}>
                    <Typography fontSize={"0.75rem"}>
                        1. Le témoin fait volontairement la présente déposition et il décrira tous les faits à sa connaissance, autant qu'il sache et s’en souvienne. Dans cette déposition, il précisera qu'il parle des faits qu'il a personnellement vécus, observés et/ou entendus, en les distinguant de ceux qu'il a appris auprès des tiers.
                    </Typography>
                    <Checkbox color={"default"} checked={check1} onChange={(e) => setCheck1(e.target.checked)} />
                </ListItem>
                <ListItem className={"d-flex justify-content-between align-items-center"}>
                    <Typography fontSize={"0.75rem"}>
                        2. Il n'a ni subi de menaces, ni été contraint de faire cette déposition, ni reçu une quelconque promesse ou incitation pour la faire.
                    </Typography>
                    <Checkbox color={"default"} checked={check2} onChange={(e) => setCheck2(e.target.checked)} />
                </ListItem>
                <ListItem className={"d-flex justify-content-between align-items-center"}>
                    <Typography fontSize={"0.75rem"}>
                        3. Il sait que sa déposition pourra être utilisée dans le cadre d’une procédure devant le Tribunal et qu'il pourrait être appelé à témoigner dans le cadre d’une telle procédure.
                    </Typography>
                    <Checkbox color={"default"} checked={check3} onChange={(e) => setCheck3(e.target.checked)} />
                </ListItem>
                <ListItem className={"d-flex justify-content-between align-items-center"}>
                    <Typography fontSize={"0.75rem"}>
                        4. En cas d’utilisation ou non de la présente déposition dans le cadre d’une procédure devant le Tribunal , il comprend qu'il pourrait être poursuivi par le Tribunal pour outrage au tribunal, entrave à l’administration de la justice ou faux témoignage si, dans cette déposition, il fait des déclarations qu'il sait être fausses et ou qu'il ne croit pas être vraies.
                    </Typography>
                    <Checkbox color={"default"} checked={check4} onChange={(e) => setCheck4(e.target.checked)} />
                </ListItem>
            </List>
        </Box>
    )
}
export default ComplaintConditions;