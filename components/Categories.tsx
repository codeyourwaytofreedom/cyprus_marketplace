import styles from "../styles/Home.module.css";
import Category_and_subs from "./Cat_subs";


const Categories = () => {
    return ( <>
        <div className={styles.categories}>
            <Category_and_subs 
                image_link={"/realestate.png"} 
                alt={"real estate"} 
                main_title={"Real Estate"} 
                subs={["Residence", "Workplace", "Land","Housing Projects","Building","Timeshare","Touristic facility"]}/>
        </div>
    </> );
}
 
export default Categories;