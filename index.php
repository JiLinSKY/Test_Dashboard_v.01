<?php

require_once 'vendor/autoload.php';

// Create a Twig loader and environment
$loader = new \Twig\Loader\FilesystemLoader('templates');
$twig = new \Twig\Environment($loader);

// Render a template
echo $twig->render('index.html', ['name' => 'World']);
