import Wrapper from "../../../components/Wrapper";
import styles from "../../../styles/Home.module.css";
import Category_and_subs from "../../../components/Cat_subs";

const Vehicles_Category = () => {
    return ( <>
        <Wrapper pageTitle={"Vehicles"}>
            <div className={styles.categories}>
                <Category_and_subs 
                    image_link={"/vehicles.png"} 
                    alt={"vehicles"} 
                    main_title={"Vehicles"} 
                    subs={["Automobile", "Off-road, SUV & Pickup", "Motorcycle","Minivan & Panel Van","Commercial Vehicles",
                        "Electric Vehicles","Rental Vehicles","Marine Vehicles","Damaged Vehicles"]}/>
            </div>
        </Wrapper>
    </>  );
}
 
export default Vehicles_Category;