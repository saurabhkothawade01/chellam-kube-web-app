#!/usr/bin/python3

import cgi
import subprocess

print("content: text/html")
print()

f = cgi.FieldStorage()

imageName = f.getvalue("imageName")
deployName = f.getvalue("deployName")
podName = f.getvalue("podName")
data = f.getvalue("data")
portNo = f.getvalue("portNo")
svc = f.getvalue("svc")
scale = f.getvalue("scale")

# show pod
if ("pod" in data) and (("show" in data) or ("print" in data ) ) or ("running" in data):
    run = "sudo  kubectl get pod --kubeconfig /root/admin.conf"
    o = subprocess.getoutput(run)
    print(o)

# launch pod
elif ("pod" in data) and (("launch" in data) or ("execute" in data) or ("create" in data)):
    run = "sudo  kubectl run  {} --image={}  --kubeconfig /root/admin.conf".format(podName, imageName)
    o = subprocess.getoutput(run)
    print(o)

# launch deployment
elif (("deploy" in data) or ("deployments" in data) or ("deployment" in data) ) and (("create" in data) or ("launch" in data) or ("execute" in data) ):
         run = "sudo kubectl create deploy {} --image={} --kubeconfig /root/admin.conf ".format(deployName, imageName)
         o = subprocess.getoutput(run)
         print(o)

# show deployment
elif (("deploy" in data) or ("deployments" in data) or ("deployment" in data) ) and (("show" in data) or ("print" in data ) ) or ("running" in data):
    run = "sudo kubectl get deploy --kubeconfig /root/admin.conf"
    o = subprocess.getoutput(run)
    print(o)

# delete pod
elif (("delete" in data) or ("remove" in data ) ) and (("pod" in data)):
    run = "sudo kubectl delete pod {} --kubeconfig /root/admin.conf".format(podName)
    o = subprocess.getoutput(run)
    print(o)

# delete deployment
elif (("delete" in data) or ("remove" in data ) ) and (("deploy" in data) or ("deployments" in data) or ("deployment" in data)):
    run = "sudo kubectl delete deploy {} --kubeconfig /root/admin.conf".format(deployName)
    o = subprocess.getoutput(run)
    print(o)

# expose deployment
elif ( ("expose" in data) ) and ( ("deployments" in data) or ("deploy" in data) or ("deploment") ):
    run = "sudo kubectl expose deploy {} --port={} --type={} --kubeconfig /root/admin.conf".format(deployName, portNo, svc)
    o = subprocess.getoutput(run)
    print(o)

# show service
elif ( ("show" in data) or ("print" in data)) and (("svc" in data) or ("service" in data) ):
    run = "sudo kubectl get svc --kubeconfig /root/admin.conf"
    o = subprocess.getoutput(run)
    print(o)

# scaling or increasing deployments
elif (("scale" in data) or ("increase" in data ) ) and ( ("deployments" in data) or ("deploy" in data) or ("deploment") ):
    run = "sudo kubectl scale deploy {} --replicas={} --kubeconfig /root/admin.conf".format(deployName, scale)
    o = subprocess.getoutput(run)
    print(o)

# delete complete environment
elif (("complete" in data) or ("all" in data) ) and ( ("env" in data) or ("environment" in data ) or ("resource" in data )):
    run = "sudo kubectl delete all --all --kubeconfig /root/admin.conf"
    o = subprocess.getoutput(run)
    print(o)
