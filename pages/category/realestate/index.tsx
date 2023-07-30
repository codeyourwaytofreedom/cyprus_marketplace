import Wrapper from "../../../components/Wrapper";
import styles from "../../../styles/Home.module.css";
import Category_and_subs from "../../../components/Cat_subs";
import Home_Page_Display from "../../../components/Home_Display";
import Custom_Display from "../../../components/Custom_Display";
import Ads from "../../../components/Ads";

const Real_Estate_Category = () => {
    return ( <>
        <Wrapper pageTitle={"Real Estate"}>
            <div id={styles.estate_double}>
                <div className={styles.categories}>
                    <Category_and_subs 
                        image_link={"/realestate.png"} 
                        alt={"realestate"} 
                        main_title={"Real Estate"} 
                        subs={["Residential", "Commercial", "Land","Housing Projects","Building","Timeshares","Tourism facilities"]}/>
                </div>    
                <div>
                    Filters
                </div>
                <div>
                    Advertisement
                </div>
            </div>
 
            <div id={styles.estate_display}>
                <Custom_Display cols={7} title={"Real Estate Showcase"}/>
            </div>       
        </Wrapper>
    </>  );
}
 
export default Real_Estate_Category;