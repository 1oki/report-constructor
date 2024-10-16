import { Flex} from 'antd';

const Clipboard = () => {

    let connectToNavBlock = 'ssh agrodroid@192.168.10.10';
    let navPass = 'vox0Nish';
    let ControlPass = 'agrodroid';
    let connectToMaster = 'ssh agrodroid@192.168.10.208';
    let connectToSlave = 'ssh agrodroid@192.168.10.209';
    let statusCgn = "sudo systemctl status 'cgn*'";
    let i2cdetect = "i2cdetect -y 2";
    let videostream = "ll /dev/vid* ";
    let releasesCamDrivers = "cd ~/releases/active_release/cgn_cam/drivers/  ";
    let ll = 'll';
    let rmRf = 'rm -rf ';
    let tarXzvf = 'tar xzvf ./*tar.gz ';
    let cdD3 = "cd ./d3";
    let dpkg = "sudo dpkg -i ./*deb";
    let shutdownR = "sudo shutdown -r now ";
    let candump = "candump can0 ";
    let daemonReload= "sudo systemctl daemon-reload";
    let ipLinkDown = "sudo ip link set down can0";
    let jetHardStatus = "sudo systemctl status cgn_jetson_hardware.service";
    let jetHardRestart = "sudo systemctl restart cgn_jetson_hardware.service";
    let dockerRestart = "sudo systemctl restart docker";
    let dockerLogsNpme = "docker logs npme";
    let reboot = "sudo reboot";
    let bundleReinstall = "cd  ~/releases/active_release && ./run_init_release.sh  --force";
    let NavBundleReinstall1 = "cd ~/releases/active_release/navigation_unit/";
    let NavBundleReinstall2 = ". ../control_unit/virtual_env/host/base/bin/activate";
    let NavBundleReinstall3 = "./init_release.py";
    let node = "cat /home/agrodroid/releases/common/node";


    let logsDir = "cd /var/log/";
    let kernLog = "kern.log";
    let sysLog = "sys.log";
    let imuLog = "xxd /dev/ttyS5";
    let allLogs = `cd /home/agrodroid/Downloads/ && 
    docker logs --tail 5000 npme > npme_restarting.log && 
    systemd-analyze plot > sys-anal_plot.svg && 
    docker logs redis > redis_log.svg && 
    journalctl -u docker.service > demon_log.svg && 
    sudo journalctl -a -u cgn_jetson_hardware.service > jet-hard_log.svg`;

    return (
        <>
        <h1>Clipboard</h1>
        <Flex  justify={'space-around'} align={'flex-start'}>
            <div>
                <p>connectToNavBlock</p>
                <button onClick={() => navigator.clipboard.writeText(connectToNavBlock)}>{connectToNavBlock}</button> 
                <p>
                    <button onClick={() => navigator.clipboard.writeText(navPass)}>{navPass}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(statusCgn)}>{statusCgn}</button> 
                </p>
                
            </div>
            <div>
                <p>connectToMaster</p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(connectToMaster)}>{connectToMaster}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(ControlPass)}>{ControlPass}</button> 
                </p>
                
            </div>
            <div>
                <p>connectToSlave</p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(connectToSlave)}>{connectToSlave}</button>
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(ControlPass)}>{ControlPass}</button> 
                </p>
            </div>
        </Flex>
        <Flex  justify={'space-around'} align={'flex-start'}>
            <div>
                <p>Can</p>
                <p>
                <button onClick={() => navigator.clipboard.writeText(candump)}>{candump}</button> 
                </p>
                <p>
                <button onClick={() => navigator.clipboard.writeText(daemonReload)}>{daemonReload}</button> 
                </p>
                <p>
                <button onClick={() => navigator.clipboard.writeText(ipLinkDown)}>{ipLinkDown}</button> 
                </p>
                <p>
                <button onClick={() => navigator.clipboard.writeText(jetHardStatus)}>{jetHardStatus}</button> 
                </p>
                <p>
                <button onClick={() => navigator.clipboard.writeText(jetHardRestart)}>{jetHardRestart}</button> 
                </p>
                <p>
                <button onClick={() => navigator.clipboard.writeText(dockerRestart)}>{dockerRestart}</button> 
                </p>
                <p>
                <button onClick={() => navigator.clipboard.writeText(dockerLogsNpme)}>{dockerLogsNpme}</button> 
                </p>
                <p>
                <button onClick={() => navigator.clipboard.writeText(reboot)}>{reboot}</button> 
                </p>
            </div>
            <div>
                <p>Камера</p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(i2cdetect)}>{i2cdetect}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(videostream)}>{videostream}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(releasesCamDrivers)}>{releasesCamDrivers}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(ll)}>{ll}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(rmRf)}>{rmRf}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(tarXzvf)}>{tarXzvf}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(cdD3)}>{cdD3}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(dpkg)}>{dpkg}</button> 
                </p>
                <p>
                    <button onClick={() => navigator.clipboard.writeText(shutdownR)}>{shutdownR}</button> 
                </p>
            </div>
            
            <div>
                <p>Control Block Bundle Reinstall</p>
                <button onClick={() => navigator.clipboard.writeText(bundleReinstall)}>{bundleReinstall}</button> 
                <p><br/></p>
                <p>Nav Block Bundle Reinstall</p>
                <p><button onClick={() => navigator.clipboard.writeText(NavBundleReinstall1)}>{NavBundleReinstall1}</button></p>
                <p><button onClick={() => navigator.clipboard.writeText(NavBundleReinstall2)}>{NavBundleReinstall2}</button></p>
                <p><button onClick={() => navigator.clipboard.writeText(NavBundleReinstall3)}>{NavBundleReinstall3}</button></p>
                <p><br/></p>
                <p><button onClick={() => navigator.clipboard.writeText(node)}>{node}</button></p>
            </div>

        </Flex>
        <p>Logs</p>
        <Flex  justify={'space-around'} align={'flex-start'} flex-direction={'row'}>
            <p><button onClick={() => navigator.clipboard.writeText(logsDir)}>{logsDir}</button></p>
            <p><button onClick={() => navigator.clipboard.writeText(kernLog)}>{kernLog}</button></p>
            <p><button onClick={() => navigator.clipboard.writeText(sysLog)}>{sysLog}</button></p>
            <p><button onClick={() => navigator.clipboard.writeText(imuLog)}>imuLog</button></p>
            <p><button onClick={() => navigator.clipboard.writeText(allLogs)}>allLogs</button></p>
        </Flex>
        </>
    )
}

export default Clipboard;