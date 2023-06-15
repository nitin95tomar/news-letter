import { useCallback, useRef, useState } from 'react';
import { NewsList } from '../List';
import styles from './News.styles';

const News = () => {
	const search = useRef<HTMLInputElement>(null);
	const currentPage = useRef<number>(1);
	const [respone, setResponse] = useState<any>({});

	const searchHandler = useCallback(() => {
		fetch(
			`http://content.guardianapis.com/search?api-key=test&q=${search.current?.value}&show-fields=thumbnail,headline&show-tags=keyword&page=${currentPage.current}&page-size=10`
		)
			.then((response) => response.json())
			.then((data) => {
				setResponse(data.response);
			});
	}, []);

	const handleNext = () => {
		if (currentPage.current < respone.pages) {
			currentPage.current = currentPage.current + 1;
		}
		searchHandler();
	};

	const handlePrev = () => {
		if (currentPage.current > 1) {
			currentPage.current = currentPage.current - 1;
		}
		searchHandler();
	};

	const searchClick = () => {
		currentPage.current = 1;
		searchHandler();
	};

	const tagClick = (keyword: string) => {
		if (search.current) search.current.value = keyword;
		currentPage.current = 1;
		searchHandler();
	};

	return (
		<>
			<h1>News Lister</h1>
			<br />
			<label htmlFor="search">Enter search text </label>
			<input id="search" name="search" ref={search} />
			<styles.SearchButton onClick={searchClick}>
				Search
			</styles.SearchButton>
			<br />
			{respone.results?.length && (
				<NewsList
					results={[...respone.results]}
					pages={respone.pages}
					currentPage={currentPage.current}
					handleNext={handleNext}
					handlePrev={handlePrev}
					tagClick={tagClick}
				/>
			)}
			<br />
		</>
	);
};

export default News;
