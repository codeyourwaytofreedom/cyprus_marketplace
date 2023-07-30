import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const TopBanner = () => {
    return ( <>
        <div className={styles.topbanner}>
            <div className={styles.topbanner_motto}>
               <Link href={"/"}>MarketPlace - Cyprus</Link> 
            </div>
            <div className={styles.topbanner_right}>
                <Link href={"/login"}>
                    <Image src={"/loginn.png"} alt={"login"} width={30} height={30}/>
                    <span>Log in</span>
                </Link>
                <Link href={"/signup"}>
                    <Image src={"/signupp.png"} alt={"signup"} width={30} height={30}/>
                    <span>Sign up</span>
                </Link>
            </div>
        </div>
    </> );
}
 
export default TopBanner;