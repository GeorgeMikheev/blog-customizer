import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ({open, isOpen}: any) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={open}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={isOpen ? `${styles.container_open} ${styles.container}` : styles.container}
		>
			<img src={arrow} alt='иконка стрелочки' className={isOpen ? `${styles.arrow_open} ${styles.arrow}` : styles.arrow} />
		</div>
	);
};
