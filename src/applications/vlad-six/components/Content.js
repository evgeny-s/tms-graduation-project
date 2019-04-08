import React from 'react';

import Form from '../containers/Content/RecipeForm'
import List from '../containers/Content/RecipesList'
import Item from '../containers/Content/RecipeForView'
import Start from './Content/StartPage'

import './Content/Content.scss';

class Content extends React.Component{
    componentWillMount(){
        this.props.fetchList()
    }

    render(){
        let {openForm, sortList} = this.props,
            component = openForm ? <Form/> : <Item/>;

        return(
            <section className='content'>
                {
                    sortList.length
                    ?
                    <React.Fragment>
                        <List/>
                        {component}
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Start/>
                        <Form/>
                    </React.Fragment>
                }
            </section>
        )
    }
};

export default Content;