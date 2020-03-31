import React, { Children } from 'react';
import Layout from '../components/Layout';

function TermsAndConditions(props) {
    return(
    <div>
        <Layout>
            {props.children}
        </Layout>
    </div>
    )
}

export default TermsAndConditions;