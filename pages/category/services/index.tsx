import Wrapper from "../../../components/Wrapper";
import styles from "../../../styles/Home.module.css";
import Category_and_subs from "../../../components/Cat_subs";

const Services_Category = () => {
    return ( <>
        <Wrapper pageTitle={"Services"}>
            <div className={styles.categories}>
                <Category_and_subs 
                    image_link={"/services.png"} 
                    alt={"services"}
                    main_title={"Services"} 
                    subs={["Interior Repairs and Decoration","Logistics & Transportation","Car Service and Maintenance",
                    "Repairs & Maintenance","Wedding & Event Planning"]}/>
            </div>
        </Wrapper>
    </>  );
}
 
export default Services_Category;