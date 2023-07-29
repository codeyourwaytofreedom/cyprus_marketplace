import Wrapper from "../../../components/Wrapper";
import styles from "../../../styles/Home.module.css";
import Category_and_subs from "../../../components/Cat_subs";

const Real_Estate_Category = () => {
    return ( <>
        <Wrapper pageTitle={"Real Estate"}>
            <div className={styles.categories}>
                <Category_and_subs 
                    image_link={"/realestate.png"} 
                    alt={"realestate"} 
                    main_title={"Real Estate"} 
                    subs={["Residence", "Workplace", "Land","Housing Projects","Building","Timeshare","Touristic facility"]}/>
            </div>
        </Wrapper>
    </>  );
}
 
export default Real_Estate_Category;