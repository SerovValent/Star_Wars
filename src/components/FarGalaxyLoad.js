
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFarGalaxyTextAction} from "../redux/actions/farGalaxyAction";

const FarGalaxyLoad = () => {
    const text = useSelector(state => state.text);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFarGalaxyTextAction())
    },[])
    return (
        <div className={"farGalaxy"}>
            {text}
        </div>
    );
};

export default FarGalaxyLoad;
