<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2018.1.1.386
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Kontakt Form verzenden',
	'heading' => 'Nieuw formulier verzenden',
	'success_redirect' => '',
	'resources' => array(
		'checkbox_checked' => 'Ingeschakeld',
		'checkbox_unchecked' => 'Uitgeschakeld',
		'submitted_from' => 'Formulier verzonden op website: %s',
		'submitted_by' => 'IP-adres van bezoeker: %s',
		'too_many_submissions' => 'Te veel recente inzendingen van dit IP',
		'failed_to_send_email' => 'Verzenden van e-mail is mislukt',
		'invalid_reCAPTCHA_private_key' => 'Ongeldige reCAPTCHA-privécode.',
		'invalid_reCAPTCHA2_private_key' => 'Ongeldige persoonlijke reCAPTCHA 2.0-code.',
		'invalid_reCAPTCHA2_server_response' => 'Ongeldige reCAPTCHA 2.0-serverreactie.',
		'invalid_field_type' => 'Onbekend veldtype %s.',
		'invalid_form_config' => 'Het veld %s heeft een ongeldige configuratie.',
		'unknown_method' => 'Onbekende serveraanvraagmethode'
	),
	'email' => array(
		'from' => 'info@soprotterdam.com',
		'to' => 'info@soprotterdam.com'
	),
	'fields' => array(
		'custom_U753' => array(
			'order' => 1,
			'type' => 'string',
			'label' => 'Име',
			'required' => true,
			'errors' => array(
				'required' => 'Veld Име is vereist.'
			)
		),
		'Email' => array(
			'order' => 2,
			'type' => 'email',
			'label' => 'Адреса e-поште',
			'required' => true,
			'errors' => array(
				'required' => 'Veld Адреса e-поште is vereist.',
				'format' => 'Veld Адреса e-поште bevat een ongeldig e-mailadres.'
			)
		),
		'custom_U757' => array(
			'order' => 3,
			'type' => 'string',
			'label' => 'Порука',
			'required' => false,
			'errors' => array(
			)
		)
	)
);

process_form($form);
?>