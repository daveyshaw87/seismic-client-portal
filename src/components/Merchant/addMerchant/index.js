import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const getMerchantsQuery = gql`
	{
		merchants {
			_id
			name
			siteUrl
			creditBalance
		}
	}
`

class AddMerchant extends Component {
	render() {

		return (
			<form id="add-merchant">
				<div className="field">
					<label htmlFor="">Merchant Name</label>
					<input type="text" name="" id="" />
				</div>

				<div className="field">
                <label htmlFor="">SiteUrl</label>
					<input type="text" name="" id="" />
				</div>
			</form>
		)
	}
}

AddMerchant.propTypes = {}

export default graphql(getMerchantsQuery)(AddMerchant)
