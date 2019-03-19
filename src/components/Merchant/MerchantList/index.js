import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'



const getCategoriesQuery = gql`
	{
		categories {
			categoryName
			slug
		}
	}
`


class Details extends Component {
	
	displayMerchants() {
		
			console.log(this.props)
		if (this.props.data.loading) {
			return <Fragment />
		} else {
			return data.{this.props.type}.map((merchant) => {
				return (
					<div key={merchant._id}>
						{merchant.name} - {merchant.siteUrl} - {merchant._id}
					</div>
				)
			})
		}
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<ul>{this.displayMerchants()}</ul>
			</div>
		)
	}
}

Details.propTypes = {}

export default graphql(getCategoriesQuery)(Details)
