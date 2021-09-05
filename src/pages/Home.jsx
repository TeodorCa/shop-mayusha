import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json'
import HomeCategory from '../components/HomeCategory';
class Home extends React.Component {
constructor() {
    super();
    this.state = {
        categories: []
    }


}

componentDidMount(){
    const productsArray = Object.keys(products);
    this.setState({categories: productsArray});
}

    render(){
        console.log(this.props);
        const {signOut, user} = this.props;
        
        return(
        <div>
            <Layout signOut={signOut} user={user}>
                <div className="container-fluid">
                    <div className="row">

                    {this.state.categories.map((category, index) => {
                            return <HomeCategory 
                                key={index}
                                route={category}
                                image={products[category].image}
                                name={products[category].name}
                                description={products[category].description}
                            />
                        })

                        }

                    </div>


                </div>   
            </Layout>
        </div>
    )
}    
}

export default Home;