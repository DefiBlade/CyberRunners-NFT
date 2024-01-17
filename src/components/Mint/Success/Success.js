import './Success.scss';

import {
    NavLink,
} from "react-router-dom";

import arrowLeft from '../../../assets/img/icons/arrow_left.svg';

import title from '../../../assets/img/font_svg/mint_title_congratulations.svg';
import tag from '../../../assets/img/tags/5.svg';
import pic from '../../../assets/img/mint/mint_avatar.png';
import pic1 from "../../../assets/img/mint/mint1.gif";
import pic2 from "../../../assets/img/mint/mint2.gif";
import pic3 from "../../../assets/img/mint/mint3.gif";
import pic4 from "../../../assets/img/mint/mint4.gif";


import skeleton from '../../../assets/img/icons/skeleton_white.svg';

import charac1 from '../../../assets/img/mint/charac1.png';
import charac2 from '../../../assets/img/mint/charac2.png';
import { useState, useEffect } from "react";
import { getCurrentTotalSupply } from "../../../helpers/contract";

export const Success = () => {
    const [totalSupply, setTotalSupply] = useState(0);
    const rand =   Math.floor((Math.random() * 4));
    const avatars = [pic1, pic2, pic3, pic4];

    useEffect(() => {
        const load = async () => {
          let supply = await getCurrentTotalSupply();
          setTotalSupply(supply);
        };
        load();
      }, []);

    return (
        <div className="mint">
            <div className="mint__backHome">
                <NavLink to={{ pathname: '/' }}>
                    <img alt="icon" src={ arrowLeft }></img>
                    Back to home 
                </NavLink>
            </div>

            <section className="mint__success">
                <div className="mint__success__main">
                    <div className="mint__success__main__title">
                        <img alt="title" src={title}></img>
                        <p>
                            YOU’VE SUCCESSFULLY MINTED YOUR CYBERUNNERS NFTs. You can now see your cyberunners on
                            <a href="https://testnets.opensea.io/collection/cyberrunners" > opensea</a>
                        </p>
                    </div>

                    <div className="mint__success__main__people">
                        <div className="mint__success__main__people__wrapper">
                            <img alt="charac" src={charac1}></img>
                            <p>DYSTOPIA #201</p>
                        </div>

                        <div className="mint__success__main__people__wrapper">
                            <img alt="charac" src={charac2}></img>
                            <p>BLADERUNNER #068</p>
                        </div>
                    </div>
                </div>

                <div className="mint__success__pic">
                    <div className="mint__success__pic__wrapper">
                        <img className="mint__success__pic__tag" alt="pic" src={tag}></img>
                        <img className="mint__success__pic__main" alt="pic" src={avatars[rand]}></img>
                    </div>

                    <div className="mint__success__pic__ballance">
                        <div className="mint__success__pic__ballance__icon">
                            <img alt="tag" src={skeleton}></img>
                        </div>

                        <div className="mint__success__pic__ballance__detail">
                            <div className="mint__success__pic__ballance__detail__number">
                                {totalSupply} / 8,888
                            </div>

                            <div className="mint__success__pic__ballance__detail__info">
                                CYBERUNNERS ALREADY MINTED
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Success;