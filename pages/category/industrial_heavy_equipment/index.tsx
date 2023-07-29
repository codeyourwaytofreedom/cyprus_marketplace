import Wrapper from "../../../components/Wrapper";
import styles from "../../../styles/Home.module.css";
import Category_and_subs from "../../../components/Cat_subs";

const Industrial_heavy_equipment_Category = () => {
    return ( <>
        <Wrapper pageTitle={"Industrial & Heavy Equipment"}>
            <div className={styles.categories}>
                <Category_and_subs 
                    image_link={"/infrastructure.png"} 
                    alt={"industrial_heavy_equipment"}
                    main_title={"Industrial & Heavy Equipment"} 
                    subs={["Agricultural Machines","Engineering Vehicle","Industrial","Electricity & Energy"]}/>
            </div>
        </Wrapper>
    </>  );
}
 
export default Industrial_heavy_equipment_Category;