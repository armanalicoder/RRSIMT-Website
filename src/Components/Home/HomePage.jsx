import About from "./About";
import ChairmanMessage from "./ChairmanMessage";
import Companies from "./Companies";
import DirectorMessage from "./DirectorMessage";
import FAQ from "./FAQ";
import QuickLink from "./QuickLink";
import Slider from "./Slider";
import WebInfo from "./WebInfo";


export default function HomePage(){
    return (
        <>
        <Slider/>
        <WebInfo/>
        <About/>
        <QuickLink/>
        {/* <Courses/> */}
        {/* <Departments/> */}
        <ChairmanMessage/>
        <DirectorMessage/>
        <Companies/>
        <FAQ/>
        </>
    )
}