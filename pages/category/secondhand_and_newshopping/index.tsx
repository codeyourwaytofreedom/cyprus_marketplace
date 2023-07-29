import Wrapper from "../../../components/Wrapper";
import styles from "../../../styles/Home.module.css";
import Category_and_subs from "../../../components/Cat_subs";


const Seconda_Hand_Category = () => {
    return ( <>
        <Wrapper pageTitle={"Second Hand and New Shopping"}>
            <div className={styles.categories}>
                <Category_and_subs 
                    image_link={"/cart.png"} 
                    alt={"secondhand_and_newshopping"} 
                    main_title={"Second Hand and New Shopping"} 
                    subs={["Computer", "Mobile Phone", "Photo & Camera","Home Decoration","Home Electronics",
                        "Electrical Appliances","Clothing & Accessories","Watches","Mother & Baby","Personal Care & Cosmetics",
                        "Hobby & Toys","Gaming & Console","Book, Magazine & Movie","Music","Sports","Jewelry, Jewelery & Gold",
                        "Collection","Antique","Garden & DIY Market","Technical Electronics"]}/>
            </div>
        </Wrapper>
    </>  );
}
 
export default Seconda_Hand_Category;