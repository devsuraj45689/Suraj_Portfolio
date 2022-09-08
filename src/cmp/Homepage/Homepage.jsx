import './Homepage.css';
import Bigadd from './Bigadd/Bigadd';
import Category from './Category/Category';
import Benifits from './Benifits/Benifits';
const Homepage = () => {
    const design = (
        <>
            <Bigadd></Bigadd>
            <Category></Category>
            <Benifits></Benifits>
        </>
    );
    return design;
}

export default Homepage;