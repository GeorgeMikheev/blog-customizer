import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { OptionType, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

import { useState } from 'react';

import {
	fontFamilyOptions,
	fontFamilyClasses,
	fontSizeOptions,
	fontColors,
	contentWidthArr,
} from './constants/articleProps';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [appState, setAppState] = useState(defaultArticleState);
	const [asideIsOpen, setAsideOpen] = useState(false);
	const [formState, setFormState] = useState(appState);

	const openAside = () => {
		setAsideOpen(prevState => !prevState);
		console.log()
	}

	const changeFontFamily = (selected: OptionType) => setFormState({...formState, fontFamilyOption: selected});
	const changeFontSize = (selected: OptionType) => setFormState({...formState, fontSizeOption: selected});
	const changeColor = (selected: OptionType) => setFormState({...formState, fontColor: selected});
	const changeWidthContent = (selected: OptionType) => setFormState({...formState, contentWidth: selected});

	const onClickReset = () => setFormState(appState);

	const onClickApply = (evt: React.FormEvent) => {
		evt.preventDefault();
		setAppState(formState);
	}

	const props: any = {
		asideIsOpen,
		fontFamilyOptions,
		fontFamilyClasses,
		fontSizeOptions,
		fontColors,
		formState,
		contentWidthArr,
		openAside,
		changeFontFamily,
		changeFontSize,
		changeColor,
		changeWidthContent,
		onClickReset,
		onClickApply,
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm {...props} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
