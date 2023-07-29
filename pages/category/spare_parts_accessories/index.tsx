import Wrapper from "../../../components/Wrapper";
import styles from "../../../styles/Home.module.css";
import Category_and_subs from "../../../components/Cat_subs";

const Spare_Parts_Category = () => {
    return ( <>
        <Wrapper pageTitle={"Spare Parts, Accessories, Hardware & Tuning"}>
            <div className={styles.categories}>
                <Category_and_subs 
                    image_link={"/spareparts.png"} 
                    alt={"spare_parts_accessories"} 
                    main_title={"Spare Parts, Accessories, Hardware & Tuning"} 
                    subs={["Automotive Equipment", "Motorcycle Equipment", "Marine Equipment"]}/>
            </div>
        </Wrapper>
    </>  );
}
 
export default Spare_Parts_Category;