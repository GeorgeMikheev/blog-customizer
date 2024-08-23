import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	OptionType,
	defaultArticleState,
	fontFamilyOptions,
	fontFamilyClasses,
	fontSizeOptions,
	fontColors,
	contentWidthArr,
	backgroundColors,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

export type TProps = {
	asideIsOpen: boolean;
	fontFamilyOptions: OptionType[];
	fontFamilyClasses: any;
	fontSizeOptions: OptionType[];
	fontColors: OptionType[];
	formState: ArticleStateType;
	backgroundColors: OptionType[];
	contentWidthArr: OptionType[];
	changeStateAside(): void;
	changeFontFamily(selected: OptionType): void;
	changeFontSize(selected: OptionType): void;
	changeColor(selected: OptionType): void;
	changeBackgroundColor(selected: OptionType): void;
	changeWidthContent(selected: OptionType): void;
	onClickReset(): void;
	onClickApply(evt: React.FormEvent): void;
};

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [appState, setAppState] = useState(defaultArticleState);
	const [asideIsOpen, setAsideOpen] = useState(false);
	const [formState, setFormState] = useState(appState);

	const changeStateAside = () => setAsideOpen((prevState) => !prevState);

	const changeFontFamily = (selected: OptionType) =>
		setFormState({ ...formState, fontFamilyOption: selected });
	const changeFontSize = (selected: OptionType) =>
		setFormState({ ...formState, fontSizeOption: selected });
	const changeColor = (selected: OptionType) =>
		setFormState({ ...formState, fontColor: selected });
	const changeBackgroundColor = (selected: OptionType) =>
		setFormState({ ...formState, backgroundColor: selected });
	const changeWidthContent = (selected: OptionType) =>
		setFormState({ ...formState, contentWidth: selected });

	const onClickReset = () => {
		setFormState(defaultArticleState);
		setAppState(defaultArticleState);
	};

	const onClickApply = (evt: React.FormEvent) => {
		evt.preventDefault();
		setAppState(formState);
		console.log(appState);
	};

	const closeAside = () => {
		if (asideIsOpen) changeStateAside();
	};

	const props: TProps = {
		asideIsOpen,
		fontFamilyOptions,
		fontFamilyClasses,
		fontSizeOptions,
		fontColors,
		formState,
		backgroundColors,
		contentWidthArr,
		changeStateAside,
		changeFontFamily,
		changeFontSize,
		changeColor,
		changeBackgroundColor,
		changeWidthContent,
		onClickReset,
		onClickApply,
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appState.fontFamilyOption.value,
					'--font-size': appState.fontSizeOption.value,
					'--font-color': appState.fontColor.value,
					'--container-width': appState.contentWidth.value,
					'--bg-color': appState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm {...props} />
			<Article closeAside={closeAside} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
