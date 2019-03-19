import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'

import './App.css'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Header from './components/Header'
import MerchantList from './components/Merchant/MerchantList'

const FETCH_CATEGORY_REQUIREMENTS = gql`
	{
		categories {
			_id
			categoryName
			slug
			products {
				_id
				productName
				productUrl
				images
				price
			}
		}
	}
`

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

const getProductsQuery = gql`
	{
		allProducts {
			productName
			productUrl
			price
			images
		}
	}
`

const getCategoriesQuery = gql`
	{
		categories {
			categoryName
			slug
		}
	}
`

const App = () => (
	<Query query={FETCH_CATEGORY_REQUIREMENTS}>
		{({ loading, error, data }) => {
			if (loading) return <Fragment />
			if (error) return `Error! ${error.message}`

			return (
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<Header header="Merchant List" />
						<Grid item xs={3}>
							<MerchantList query={getMerchantsQuery} type="merchants"/>

						</Grid>
					</Grid>
				</Grid>
			)
		}}
	</Query>
)
export default App
