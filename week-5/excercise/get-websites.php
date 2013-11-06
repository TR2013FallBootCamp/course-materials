<?php

function getTitle($content) {
    if (preg_match("/<title>(.+)<\/title>/i", $content, $matches)) {
        echo 'The title for the website that was retrieved is: ' . $matches[1] . "\n";
    } else {
        echo "The page doesn't have a title tag. \n";
    }
}

echo "Getting title for Google...\n";
$google_website = file_get_contents('https://www.google.com/');
getTitle($google_website);

echo "Getting title for TalentRiot...\n";
$talentriot_website = file_get_contents('http://talentriot.com/');
getTitle($talentriot_website);

echo "Getting title for GitHub...\n";
$github_website = file_get_contents('https://github.com/');
getTitle($github_website);

echo "Getting title for Boulder's site...\n";
$boulder_website = file_get_contents('https://bouldercolorado.gov/');
getTitle($boulder_website);

echo "Getting title for the Broncos' site...\n";
$broncos_website = file_get_contents('http://www.denverbroncos.com/');
getTitle($broncos_website);

echo "Getting title for the Avalanche site...\n";
$avalanche_website = file_get_contents('http://avalanche.nhl.com/');
getTitle($avalanche_website);

echo "Getting title for Scrib's site...\n";
$scrib_website = file_get_contents('http://scrib.co/');
getTitle($scrib_website);

?>
