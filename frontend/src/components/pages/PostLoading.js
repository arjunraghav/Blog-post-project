import React from "react";

const PostLoading = (Component) => {
	return function PostLoadingComponent({ isLoading, ...props }) {
		console.log("start post loading", isLoading, props, "end post loading");
		if (!isLoading) return <Component {...props} />;
		return <p>Waiting for data to load..</p>;
	};
};

export default PostLoading;
