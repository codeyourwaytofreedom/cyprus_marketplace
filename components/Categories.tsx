import styles from "../styles/Home.module.css";
import Category_and_subs from "./Cat_subs";


const Categories = () => {
    return ( <>
        <div className={styles.categories}>
            <Category_and_subs 
                image_link={"/realestate.png"} 
                alt={"realestate"} 
                main_title={"Real Estate"} 
                subs={["Residential", "Commercial", "Land","Housing Projects","Building","Timeshares","Tourism facilities"]}/>

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
                subs={["Computers","Cell Phones","Cameras & Photographic Equipment",
                "Home Decor","Home Electronics","Electrical Appliances",
                "Clothing & Accessories","Watches & Clocks","Mother & Baby",
                "Beauty & Healthcare","Toys & Hobbies","Games & Consoles",
                "Books, Magazines & Movies","Music","Sports", "Jewelry", 
                "Collectibles", "Antique", "Garden & Home Improvement",
                "Electronics","Office & Stationery","Foods & Feed","Everything Else"]}/>

            <Category_and_subs 
                image_link={"/infrastructure.png"} 
                alt={"industrial_heavy_equipment"}
                main_title={"Industrial & Heavy Equipment"} 
                subs={["Agricultural Machines","Engineering Vehicle","Industrial","Electricity & Energy"]}/>

            <Category_and_subs 
                image_link={"/services.png"} 
                alt={"services"}
                main_title={"Services"} 
                subs={["Interior Repairs and Decoration","Logistics & Transportation","Car Service and Maintenance",
                "Repairs & Maintenance","Wedding & Event Planning"]}/>
        </div>
    </> );
}
 
export default Categories;