import Styles from './News.styles';
import { NewsProps } from './News.types';

const News = ({
	results,
	pages,
	currentPage,
	handleNext,
	handlePrev,
	tagClick,
}: NewsProps) => {
	const renderPagination = (pages: number) => {
		if (pages > 2) {
			return (
				<>
					<Styles.PageNumber>1</Styles.PageNumber>
					<Styles.PageNumber>2</Styles.PageNumber>
					...
					<Styles.PageNumber>{pages}</Styles.PageNumber>
				</>
			);
		} else {
			return (
				<>
					<Styles.PageNumber>1</Styles.PageNumber>
				</>
			);
		}
	};

	return (
		<>
			<Styles.NewsListContainer>
				{results.length &&
					results.map((item: any) => {
						return (
							<Styles.NewsItemContainer key={item.}>
								<Styles.NewsThumbnail
									src={item.fields.thumbnail}
									alt={item.fields.headline}
									onClick={() =>
										window.open(item.webUrl, '_blank')
									}
								/>
								<Styles.NewsContentHolder>
									<label
										onClick={() =>
											window.open(item.webUrl, '_blank')
										}
									>
										{item.fields.headline}
									</label>
									<Styles.TagsHolder>
										{item.tags.length > 0 &&
											item.tags.map((tag: any) => {	
												return (
													<Styles.Tag
														key={tag.id}
														onClick={() => {
															tagClick(
																tag.webTitle
															);
														}}
													>
														{tag.webTitle}
													</Styles.Tag>
												);
											})}
									</Styles.TagsHolder>
								</Styles.NewsContentHolder>
							</Styles.NewsItemContainer>
						);
					})}
			</Styles.NewsListContainer>
			<Styles.PageButton onClick={handlePrev} disabled={currentPage === 1}>
				Prev
			</Styles.PageButton>
			{renderPagination(pages)}
			<Styles.PageButton onClick={handleNext} disabled={currentPage === pages}>
				Next
			</Styles.PageButton>
		</>
	);
};

export default News;
