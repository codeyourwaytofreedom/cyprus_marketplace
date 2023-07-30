import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

const getRandomNumber = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  type Display = {
    cols:number,
    title:string
  }
const Custom_Display:NextPage<Display> = ({cols, title}) => {
    return ( <>
        <div className={styles.display}>
            <strong>{title}</strong>
            <div className={styles.display_ads} style={{gridTemplateColumns:`repeat(${cols},1fr)`}}>
                {
                    [...Array(40)].map((e,i)=>
                    <div style={{padding:"5px"}}  key={i}>
                        <div className={styles.display_ads_each}>
                            <Link href={"/login"}>
                                <Image src={`/${getRandomNumber(1,9)}.jpeg`} width={90} height={90} alt={"img"}/>
                                <div className={styles.display_ads_each_text}>Ad Details</div>
                            </Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    </> );
}
 
export default Custom_Display;