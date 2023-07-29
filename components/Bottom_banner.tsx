import styles from "../styles/Home.module.css";
import Link from "next/link";

const Bottom_banner = () => {
    const banner_content = [
        {title:"Corporate", links:[
            {name:"About us", href:"/aboutus"},{name:"Sustainability", href:"/sustainability"},
            {name:"Human Resources", href:"/humanresources"},{name:"Contact Us", href:"/contactus"},
        ]},
        {title:"Our Services", links:[
            {name:"Doping", href:"/doping"},{name:"Secure Trade", href:"/securetrade"},
            {name:"Bulk Product Upload", href:"/BulkProductUpload"},{name:"Advertising", href:"/Advertising"},
            {name:"Sahibinden Native Ad", href:"/SahibindenNativeAd"},{name:"Mobile", href:"/Mobile"},
        ]},
        {title:"Stores", links:[
            {name:"Why Should I Open a Store?", href:"/WhyShouldIOpenaStore?"},{name:"Open Store", href:"/OpenStore"},
        ]},
        {title:"Privacy and Use", links:[
            {name:"Secure e-Trade Tips", href:"/Secure e-Trade Tips"},{name:"Agreements and Rules", href:"/Agreements and Rules"},
            {name:"Membership Agreement", href:"/Membership Agreement"},{name:"Terms of Use", href:"/Terms of Use"},
            {name:"Site Map", href:"/Site Map"},{name:"Personal Data Protection", href:"/Personal Data Protection"},
            {name:"Cookie Management", href:"/Cookie Management"},{name:"Help and Operation Guide", href:"/Help and Operation Guide"},
        ]},
        {title:"Follow Us", links:[
            {name:"Facebook", href:"/Facebook"},{name:"Twitter", href:"/Twitter"},
            {name:"Linkedin", href:"/Linkedin"},{name:"Instagram", href:"/Instagram"},
            {name:"Youtube", href:"/Youtube"}
        ]}
    ]
    return ( <>
        <div className={styles.bottombanner}>
            <div className={styles.bottombanner_shell}>
                {
                    banner_content.map((c,i)=>
                    <div className={styles.bottombanner_shell_each} key={i}>
                        <h4>{c.title}</h4>
                        {
                            c.links.map((l,ii)=>
                            <div className={styles.bottombanner_shell_each_link} key={ii}><Link href={"/login"}>{l.name}</Link></div>
                            )
                        }
                    </div>
                    )
                }
            </div>
        </div>
    </> );
}
 
export default Bottom_banner;