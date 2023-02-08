import "./App.css";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Card2display from "./Card2display";
import Card1display from "./Card1display";
import Card3display from "./Card3display";

function App() {
  return (
    // <div className="fullpage d-flex justify-content-evenly" style={{width:"100%", height:"100%", background:"blue" }}>
    //   <div className="d-flex justify-content-between" style={{width:"80%", height:"60%", fontSize:"0.85em"}}>
    //     <Card className="d-flex justify-content-center card1">
    //       <CardText className="d-flex justify-content-center"><h5>Free</h5></CardText>
    //       <CardBody>
    //         <div className="d-flex justify-content-center align-items-center">
    //         <CardTitle tag="h5" className="d-inline-block"><h4>$0</h4></CardTitle>
    //         <CardSubtitle className="d-inline-block text-muted" tag="h6">
    //           <h6>/month</h6>
    //         </CardSubtitle>
    //         </div>
    //         <CardText>
    //           <hr></hr>
    //           <ul className="fa-ul">
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               Single User
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               5GB Storage
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               Unlimited Public Projects
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               Community Access
    //             </li>
    //             <li className="text-muted">
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Unlimited Private Projects
    //             </li>
    //             <li className="text-muted">
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Dedicated Phone Support
    //             </li>
    //             <li className="text-muted">
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Free Subdomain
    //             </li>
    //             <li className="text-muted">
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Monthly Status Reports
    //             </li>
    //           </ul>
    //         </CardText>
    //         <div className="d-flex justify-content-center">
    //         <Button variant="primary" className="btn btn-primary mt-auto rounded-pill">Button</Button>
    //         </div>
    //       </CardBody>
    //     </Card>
    //     <Card className="d-flex">
    //       <CardText className="d-flex justify-content-center"><h5>Plus</h5></CardText>
    //       <CardBody>
    //         <div className="d-flex justify-content-center align-items-center">
    //         <CardTitle tag="h5" className="d-inline-block"><h4>$9</h4></CardTitle>
    //         <CardSubtitle className="d-inline-block text-muted" tag="h6">
    //           <h6>/month</h6>
    //         </CardSubtitle>
    //         </div>
    //         <CardText>
    //           <hr></hr>
    //           <ul className="fa-ul">
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               Single User
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               5GB Storage
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               Unlimited Public Projects
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               Community Access
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Unlimited Private Projects
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Dedicated Phone Support
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Free Subdomain
    //             </li>
    //             <li className="text-muted">
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Monthly Status Reports
    //             </li>
    //           </ul>
    //         </CardText>
    //         <div className="d-flex justify-content-center">
    //         <Button variant="primary" className="mt-auto rounded-pill">Button</Button>
    //         </div>
    //       </CardBody>
    //     </Card>
    //     <Card className="d-flex">
    //       <CardText className="d-flex justify-content-center"><h5>Pro</h5></CardText>
    //       <CardBody>
    //         <div className="d-flex justify-content-center align-items-center">
    //         <CardTitle tag="h5" className="d-inline-block"><h4>$49</h4></CardTitle>
    //         <CardSubtitle className="d-inline-block text-muted" tag="h6">
    //           <h6>/month</h6>
    //         </CardSubtitle>
    //         </div>
    //         <CardText>
    //           <hr></hr>
    //           <ul className="fa-ul">
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               Single User
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               5GB Storage
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               Unlimited Public Projects
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-check"></i>
    //               </span>
    //               Community Access
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Unlimited Private Projects
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Dedicated Phone Support
    //             </li>
    //             <li>
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               <div className="d-inline-block">
    //               Unlimited Free Subdomain
    //               </div>
    //             </li>
    //             <li >
    //               <span className="fa-li">
    //                 <i className="fas fa-times"></i>
    //               </span>
    //               Monthly Status Reports
    //             </li>
    //           </ul>
    //         </CardText>
    //         <div className="d-flex justify-content-center">
    //         <Button variant="primary" className="btn btn-primary mt-auto rounded-pill">Button</Button>
    //         </div>
    //       </CardBody>
    //     </Card>
    //   </div>
    // </div>
    <section className="pricing py-5">
      <div className="container">
        <div className="fullrow">
          <Card1display></Card1display>
          <Card2display></Card2display>
          <Card3display></Card3display>
        </div>
      </div>
    </section>
  
  
    );

  
}

export default App;
