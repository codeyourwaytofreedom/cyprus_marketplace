import styles from "../styles/Home.module.css";
import Category_and_subs from "./Cat_subs";


const Categories = () => {
    return ( <>
        <div className={styles.categories}>
            <Category_and_subs 
                image_link={"/realestate.png"} 
                alt={"realestate"} 
                main_title={"Real Estate"} 
                subs={["Residence", "Workplace", "Land","Housing Projects","Building","Timeshare","Touristic facility"]}/>

            <Category_and_subs 
                image_link={"/vehicles.png"} 
                alt={"vehicles"} 
                main_title={"Vehicles"} 
                subs={["Automobile", "Off-road, SUV & Pickup", "Motorcycle","Minivan & Panel Van","Commercial Vehicles",
                    "Electric Vehicles","Rental Vehicles","Marine Vehicles","Damaged Vehicles"]}/>

            <Category_and_subs 
                image_link={"/spareparts.png"} 
                alt={"spare_parts_accessories"} 
                main_title={"Spare Parts, Accessories, Hardware & Tuning"} 
                subs={["Automotive Equipment", "Motorcycle Equipment", "Marine Equipment"]}/>

            <Category_and_subs 
                image_link={"/cart.png"} 
                alt={"secondhand_and_newshopping"} 
                main_title={"Second Hand and New Shopping"} 
                subs={["Computer", "Mobile Phone", "Photo & Camera","Home Decoration","Home Electronics",
                    "Electrical Appliances","Clothing & Accessories","Watches","Mother & Baby","Personal Care & Cosmetics",
                    "Hobby & Toys","Gaming & Console","Book, Magazine & Movie","Music","Sports","Jewelry, Jewelery & Gold",
                    "Collection","Antique","Garden & DIY Market","Technical Electronics"]}/>
        </div>
    </> );
}
 
export default Categories;