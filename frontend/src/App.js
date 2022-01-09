import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/pages/Post";
import PostLoadingComponent from "./components/pages/PostLoading";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function App() {
	const [data, setData] = useState({
		loading: false,
		post: null,
	});

	const PostLoading = PostLoadingComponent(Post);

	const getData = async () => {
		try {
			let url = "/api/";
			const res = await fetch(url);
			const data = await res.json();
			console.log("fetched data getData executed", data, "end get data");
			setData({
				loading: false,
				posts: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setData({
			loading: true,
		});
		getData();
		console.log("use effect executed");
	}, []);

	const useStyles = makeStyles((theme) => ({
		"@global": {
			ul: {
				margin: 0,
				padding: 0,
				listStyle: "none",
			},
		},
		appBar: {
			borderBottom: `1px solid ${theme.palette.divider}`,
		},
		toolbar: {
			flexWrap: "wrap",
		},
		toolbarTitle: {
			flexGrow: 1,
		},
		link: {
			margin: theme.spacing(1, 1.5),
		},
		heroContent: {
			padding: theme.spacing(8, 0, 6),
		},
		cardHeader: {
			backgroundColor:
				theme.palette.type === "light"
					? theme.palette.grey[200]
					: theme.palette.grey[700],
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Header />

			{/* Hero unit */}
			<Container maxWidth='sm' component='main' className={classes.heroContent}>
				<Typography
					component='h1'
					variant='h2'
					align='center'
					color='textPrimary'
					gutterBottom>
					<p>Latest Posts</p>
				</Typography>
				<Typography
					variant='h5'
					align='center'
					color='textSecondary'
					component='p'>
					<PostLoading isLoading={data.loading} posts={data.posts} />
				</Typography>
			</Container>
			{/* End hero unit */}
			<Footer />
		</>
	);
}

export default App;
