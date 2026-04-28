import featureBarItems from "../data/featureBarItems.js";

function FeaturesBar () {
    return (
        <section className="feature-bar">
            <FeatureItem />
        </section>
    )
};

function FeatureItem() {
    return featureBarItems.map(item => {
        return (
            <div key={item.id} className="feature-item">
                <img src={item.img}></img>
                <p>{item.title}</p>
            </div>
        )
    })
};

export default FeaturesBar;