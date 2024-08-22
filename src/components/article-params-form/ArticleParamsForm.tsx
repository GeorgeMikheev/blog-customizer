import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [asideIsOpen, setAsideOpen] = useState(false);

	const openAside = () => setAsideOpen(prevState => !prevState);

	return (
		<>
			<ArrowButton open={openAside} isOpen={asideIsOpen} />
			<aside className={asideIsOpen ? `${styles.container_open} ${styles.container}` : styles.container}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
