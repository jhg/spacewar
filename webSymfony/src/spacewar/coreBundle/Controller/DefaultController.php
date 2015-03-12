<?php

namespace spacewar\coreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('coreBundle:Default:index.html.twig', array('name' => $name));
    }
}
