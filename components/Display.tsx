import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const getRandomNumber = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const Home_Page_Display = () => {
    return ( <>
        <div className={styles.display}>
            <strong>Featured ads</strong>
            <div className={styles.display_ads}>
                {
                    [...Array(40)].map((e,i)=>
                    <div style={{padding:"5px"}}>
                        <div className={styles.display_ads_each} key={i}>
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
 
export default Home_Page_Display;