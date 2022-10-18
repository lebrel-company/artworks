# -*- mode: ruby -*-
# vi: set ft=ruby :
#

APP="artworks"

Vagrant.configure("2") do |config|j
    
    if Vagrant.has_plugin?("vagrant-timezone")
      config.timezone.value = "America/Mexico_City"
    end

    config.vm.box = "ubuntu/focal64"
    config.vm.network "forwarded_port", guest: 3000, host: 3001

    config.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.name = "#{APP}-webapp-focal64"
        vb.memory = "8196"
    end

    config.vm.synced_folder ".",
        "/home/vagrant/app",
        create: true,
        group: "vagrant",
        owner: "vagrant"
    
    config.vm.provision "ansible_local" do |ansible|
        ansible.become = true,
        ansible.become_user = "root",
        ansible.provisioning_path = "/home/vagrant/app",
        ansible.playbook = "Playbooks/configure_server.yml"
    end
     
    config.vm.provision "ansible_local" do |ansible|
        ansible.become = true,
        ansible.become_user = "root",
        ansible.provisioning_path = "/home/vagrant/app",
        ansible.playbook = "Playbooks/fonts.yml"
    end
    config.vm.provision "docker"

end

