// Parent child data flow
import PromoHeading from "./PromoHeading"

const data = {
    heading: "Jo mama",
    callToAction: "Everything must go!"
}

function Promo() {
    return (
        <div>
            <PromoHeading 
            heading = {data.heading}
            callToAction = {data.callToAction}
            />
        </div>
    );
};

export default Promo;