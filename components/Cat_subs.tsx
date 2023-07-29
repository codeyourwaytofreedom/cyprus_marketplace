import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

type category_props = {
    image_link:string,
    alt:string,
    main_title:string,
    subs:string[]
}

const Category_and_subs:NextPage<category_props> = ({image_link,alt,main_title,subs}) => {
    return ( <>
        <div className={styles.categories_each}>
            <div className={styles.categories_each_main}>
                <Image src={image_link} alt={alt} width={25} height={25}/>
                <Link href={`/category/${alt}`}>{main_title}</Link>
            </div>
            <div className={styles.categories_each_subs} >
                {
                    subs.map((s,i) =>
                    <Link key={i} href={`/category/${alt}/${s.toLowerCase()}`} id={styles.sub}>{s}</Link>
                    )
                }
            </div>
        </div>    
    </> );
}
 
export default Category_and_subs;