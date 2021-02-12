import React from 'react';
import PropTypes from 'prop-types';

import { PICK_OPTIONS } from 'dfv/src/config/prop-types';

const RadioSelect = ( {
	htmlAttributes,
	name,
	value,
	options,
	setValue,
} ) => {
	return (
		<ul className="pods-radio-pick" id={ name }>
			{ options.map( ( {
				value: optionValue,
				label: optionLabel,
			} ) => {
				const idAttribute = !! htmlAttributes.id
					? `${ htmlAttributes.id }-${ optionValue }`
					: `${ name }-${ optionValue }`;

				return (
					<li key={ optionValue } className="pods-radio-pick__option">
						<div className="pods-field pods-boolean">
							<label
								className="pods-form-ui-label pods-radio-pick__option__label"
								htmlFor={ idAttribute }
							>
								<input
									name={ htmlAttributes.name || name }
									id={ idAttribute }
									checked={ value === optionValue }
									className="pods-form-ui-field-type-pick"
									type="radio"
									value={ optionValue }
									onChange={ ( event ) => {
										if ( event.target.checked ) {
											setValue( event.target.value );
										}
									} }
								/>
								{ optionLabel }
							</label>
						</div>
					</li>
				);
			} ) }
		</ul>
	);
};

RadioSelect.propTypes = {
	htmlAttributes: PropTypes.shape( {
		id: PropTypes.string,
		class: PropTypes.string,
		name: PropTypes.string,
	} ),
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	setValue: PropTypes.func.isRequired,
	options: PICK_OPTIONS.isRequired,
};

export default RadioSelect;