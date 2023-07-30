import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import {_360_auto} from "./databank.js";
import {_360_estate} from "./databank.js";

const Auto_Estate_360 = () => {
    return ( <>
            <div className={styles.display_360}>
                {
                    [_360_auto,_360_estate].map((el,ind)=>
                    <div className={styles.display_360_each} key={ind}>
                        <div className={styles.display_360_each_title}>{el.title}</div>

                        <div className={styles.display_360_each_items}>
                            {
                                el.subs.map((sub,i)=>
                                <Link href={`${el.title}/sub`} key={i}>
                                    <div className={styles.display_360_each_items_double} key={i}>
                                        <Image src={`https://cyprus-marketplace.vercel.app/./${el.title}/${i}.png`} alt={el.title} width={25} height={25}/>
                                        <span>{sub}</span>
                                    </div>
                                </Link>
                                )
                            }
                        </div>
                    </div>
                    )
                }
            </div>
    </> );
}
 
export default Auto_Estate_360;