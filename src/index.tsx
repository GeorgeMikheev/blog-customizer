import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	OptionType,
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

export type TProps = {
	pageState: ArticleStateType;
	setPageState: React.Dispatch<React.SetStateAction<{
		fontFamilyOption: OptionType;
		fontColor: OptionType;
		backgroundColor: OptionType;
		contentWidth: OptionType;
		fontSizeOption: OptionType;
	}>>
}

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [pageState, setPageState] = useState(defaultArticleState);

	const props: TProps = {
		pageState,
		setPageState,
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm {...props} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
