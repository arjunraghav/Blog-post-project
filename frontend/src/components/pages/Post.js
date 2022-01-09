import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: "16px",
		textAlign: "left",
	},
	postText: {
		display: "flex",
		justifyContent: "left",
		alignItems: "baseline",
		fontSize: "12px",
		textAlign: "left",
		marginBottom: theme.spacing(2),
	},
}));

// const posts = [
// 	{
// 		title: "Free",
// 		price: "0",
// 		description: [
// 			"10 users included",
// 			"2 GB of storage",
// 			"Help center access",
// 			"Email support",
// 		],
// 		buttonText: "Sign up for free",
// 		buttonVariant: "outlined",
// 	},
// 	{
// 		title: "Pro",
// 		subheader: "Most popular",
// 		price: "15",
// 		description: [
// 			"20 users included",
// 			"10 GB of storage",
// 			"Help center access",
// 			"Priority email support",
// 		],
// 		buttonText: "Get started",
// 		buttonVariant: "contained",
// 	},
// 	{
// 		title: "Enterprise",
// 		price: "30",
// 		description: [
// 			"50 users included",
// 			"30 GB of storage",
// 			"Help center access",
// 			"Phone & email support",
// 		],
// 		buttonText: "Contact us",
// 		buttonVariant: "outlined",
// 	},
// ];

const Posts = (props) => {
	const { posts } = props;
	console.log("start posts", posts, "end posts");
	const classes = useStyles();
	if (!posts || posts.length === 0) return <p>No posts found</p>;
	return (
		<React.Fragment>
			<Container maxWidth='md' component='main'>
				<Grid container spacing={5} alignItems='flex-end'>
					{posts.map((post) => {
						console.log("map", posts);
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image='https://source.unsplash.com/random'
										title='Image title'
									/>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant='h6'
											component='h2'
											className={classes.postTitle}>
											{post.title.substr(0, 50)}...
										</Typography>
										<div className={classes.postText}>
											<Typography
												component='p'
												color='textPrimary'></Typography>
											<Typography variant='p' color='textSecondary'>
												{post.excerpt.substr(0, 60)}...
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Posts;

// {posts.map((post) => (
//   // Enterprise card is full width at sm breakpoint
//   <Grid
//     item
//     key={post.title}
//     xs={12}
//     sm={post.title === "Enterprise" ? 12 : 6}
//     md={4}>
//     <Card>
//       <CardHeader
//         title={post.title}
//         subheader={post.subheader}
//         titleTypographyProps={{ align: "center" }}
//         subheaderTypographyProps={{ align: "center" }}
//         action={post.title === "Pro" ? <StarIcon /> : null}
//         className={classes.cardHeader}
//       />
//       <CardContent>
//         <div className={classes.cardPricing}>
//           <Typography component='h2' variant='h3' color='textPrimary'>
//             ${post.price}
//           </Typography>
//           <Typography variant='h6' color='textSecondary'>
//             /mo
//           </Typography>
//         </div>
//         <ul>
//           {post.description.map((line) => (
//             <Typography
//               component='li'
//               variant='subtitle1'
//               align='center'
//               key={line}>
//               {line}
//             </Typography>
//           ))}
//         </ul>
//       </CardContent>
//       <CardActions>
//         <Button
//           fullWidth
//           variant={post.buttonVariant}
//           color='primary'>
//           {post.buttonText}
//         </Button>
//       </CardActions>
//     </Card>
//   </Grid>
// ))}
