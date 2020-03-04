import React, { Component } from 'react';

class Accordion extends Component {
	defaultProp ={
    sections:[]
    };
	state = { currentSection: null };

	renderItem(section,index,activeIndex) {
		return(
		<li className="Item" key={index}>
            <button onClick={() => this.handleClick()}>{section.title} </button>
            {(currentSection === index) && <p>{section.content}</p>}
        </li>
        )
    }
    
    handleClick = (clickedIndex) => {
        this.setState({currentSection:clickedIndex})
    }
	renderAccordion() {
        const{currentSection}=this.state
        const{sections}=this.props
		return <ul className="Accordion">{sections.map((section,index)=>
            this.renderItem(section,index,currentSection))}</ul>;
	}
}

export default Accordion;