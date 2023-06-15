import styled from 'styled-components';

const NewsListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const NewsThumbnail = styled.img`
	height: 100px;
	width: 100px;
`;

const NewsItemContainer = styled.div`
	display: flex;
	width: 80%;
	border: 1px solid black;
	padding: 10px;
`;

const NewsContentHolder = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const TagsHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Tag = styled.label`
	border: 2px solid black;
	margin: 2px;
`;

const PageNumber = styled.label`
	margin: 0 5px;
`;

const PageButton = styled.button`
	margin: 0 5px;
`;

const Styles = {
	NewsContentHolder,
	NewsItemContainer,
	NewsListContainer,
	NewsThumbnail,
	Tag,
	TagsHolder,
	PageNumber,
	PageButton,
};

export default Styles;
